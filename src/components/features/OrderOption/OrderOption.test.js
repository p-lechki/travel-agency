import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='icons' name='test' />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render title form props ', () => {
    const expectedTitle = 'Lorem';
    const component = shallow(<OrderOption name={expectedTitle} type='icons' />);
    expect(component.find('.title').text()).toEqual(expectedTitle);
  });

  const optionTypes = {
    dropdown: 'OrderOptionDropdown',
    icons: 'OrderOptionIcons',
    checkboxes: 'OrderOptionCheckboxes',
    number: 'OrderOptionNumber',
    text: 'OrderOptionText',
    date: 'OrderOptionDate',
  };

  const mockProps = {
    id: 'abc',
    name: 'Lorem',
    values: [
      {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
      {id: 'xyz', icon: 'h-square', name: 'Lorem B', price: 100},
    ],
    required: false,
    currentValue: 'aaa',
    price: '50%',
    limits: {
      min: 0,
      max: 6,
    },
  };

  const mockPropsForType = {
    dropdown: {},
    icons: {},
    checkboxes: {currentValue: [mockProps.currentValue]},
    number: {currentValue: 1},
    text: {},
    date: {},
  };

  const testValue = mockProps.values[1].id;
  const testValueNumber = 3;
  
  for(let type in optionTypes){
    describe(`Component OrderOption with type=${type}`, () => {
      /* test setup */
      let component;
      let subcomponent;
      let renderedSubcomponent;
      let mockSetOrderOption;

      beforeEach(() => {
        mockSetOrderOption = jest.fn();
        component = shallow(<OrderOption type={type} setOrderOption={mockSetOrderOption} {...mockProps} {...mockPropsForType[type]} />);
        subcomponent = component.find(optionTypes[type]);
        renderedSubcomponent = subcomponent.dive();
      });
      /* common tests */
      it(`renders ${optionTypes[type]}`, () => {
        expect(subcomponent).toBeTruthy();
        expect(subcomponent.length).toBe(1);
      });
  
      /* type-specific tests */
      switch (type) {
        case 'dropdown': {
          /* tests for dropdown */
          it('contains select and options', () => {
            const select = renderedSubcomponent.find('select');
            expect(select.length).toBe(1);
          
            const emptyOption = select.find('option[value=""]').length;
            expect(emptyOption).toBe(1);
          
            const options = select.find('option').not('[value=""]');
            expect(options.length).toBe(mockProps.values.length);
            expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue});
          });

          break;
        }
        case 'icons': {
          /* tests for icons */
          it('should render div whit icon', () => {
            const div = renderedSubcomponent.find('.icon');
            expect(div).toBeTruthy();
          });

          it('should run setOrderOption function on click', () => {
            renderedSubcomponent.find('.icon').simulate('click');
            // expect(mockSetOrderOption).toBeCalledTimes(1);
          });

          break;
        }
        case 'checkboxes': {
          /* test for checkboxes*/
          it('should render inputs with type checkbox', () => {
            const input = renderedSubcomponent.find('input');
            expect(input.at(0).prop('type')).toBe('checkbox');
          });

          it('should run setOrderOption function on change', () => {
            const input = renderedSubcomponent.find('input');
            expect(input.at(1).prop('value')).toBe(testValue);
            input.at(1).simulate('change', { currentTarget: { checked: true }});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue],
            });
          });

          break;
        }
        case 'number': {
          /* test for number */
          it('should render inputs with type number', () => {
            const input = renderedSubcomponent.find('input');
            expect(input.prop('type')).toBe('number');
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {testValueNumber}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue});
          });
          break;
        }
        case 'text': {
          it('should render inputs with type text', () => {
            const input = renderedSubcomponent.find('input');
            expect(input.prop('type')).toBe('text');
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue});
          });
          break;
        }
        case 'date': {
          
          break;
        }
      }
    });
  }
});
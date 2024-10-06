import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import LanditForm from '../../src/components/form/LanditForm';
import FormContext, { IFormContext } from '../../src/contexts/FormContext';


function renderForm (data:IFormContext) {
  render(
    <FormContext.Provider value={data}>
      <LanditForm/>
    </FormContext.Provider>,
  );
}

// Test if the form is correctly rendered
describe('LanditForm', ()=>{
  test('Form shows loading component when context is initialized', () => {
    const contextValue:IFormContext = {
      prefectures: null,
      years: null,
      purposes: null,
      formOptionsReady: false,
      formData: {
        prefCode: '13',
        year: '2021',
        purpose: '1',
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setFormData: ()=>{} };
    renderForm(contextValue);
    const form = screen.getByTestId('form');
    const loading = screen.queryByTestId('formbody-loading');
    const formbody = screen.queryByTestId('formbody');
    expect(form).toBeInTheDocument();
    expect(loading).toBeInTheDocument();
    expect(formbody).not.toBeInTheDocument();
  });
  test('Form show the body when the context is ready', () => {
    const contextValue:IFormContext = {
      prefectures: [
        {
          prefCode: 1,
          prefName: '北海道',
        },
        {
          prefCode: 2,
          prefName: '青森県',
        },
        {
          prefCode: 13,
          prefName: '東京都',
        },
      ],
      years: [
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
      ],
      purposes: [
        {
          value: '1',
          label: '土地（住宅地）',
        },
        {
          value: '2',
          label: '土地（商業地）',
        },
        {
          value: '3',
          label: '中古マンション等',
        },
        {
          value: '4',
          label: '農地',
        },
        {
          value: '5',
          label: '林地',
        },
      ],
      formOptionsReady: true,
      formData: {
        prefCode: '13',
        year: '2021',
        purpose: '1',
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setFormData: ()=>{},
    };
    renderForm(contextValue);
    const form = screen.getByTestId('form');
    const formbody = screen.queryByTestId('formbody');
    const loading = screen.queryByTestId('formbody-loading');
    expect(form).toBeInTheDocument();
    expect(formbody).toBeInTheDocument();
    expect(loading).not.toBeInTheDocument();
  });
});

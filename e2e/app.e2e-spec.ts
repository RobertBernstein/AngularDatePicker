import { AngularDatePickerPage } from './app.po';

describe('angular-date-picker App', () => {
  let page: AngularDatePickerPage;

  beforeEach(() => {
    page = new AngularDatePickerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

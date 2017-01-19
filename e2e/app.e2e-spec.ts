import { DropDownAppPage } from './app.po';

describe('drop-down-app App', function() {
  let page: DropDownAppPage;

  beforeEach(() => {
    page = new DropDownAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

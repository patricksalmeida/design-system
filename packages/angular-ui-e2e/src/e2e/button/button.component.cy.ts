describe('angular-ui', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=buttoncomponent--primary&args=label;isDisabled:false;'
    )
  );
  it('should render the component', () => {
    cy.get('design-system-button').should('exist');
  });
});

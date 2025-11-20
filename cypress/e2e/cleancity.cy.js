describe('CleanCity Waste Pickup Scheduler App - 15 Test Cases', () => {
  const regularUser = { email: 'user@cleancity.com', password: 'password123' };
  const adminUser = { email: 'admin@cleancity.com', password: 'admin123' };

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  // 1. Navbar visible
  it('Navbar should be visible', () => {
    cy.get('.navbar').should('be.visible');
  });

  // 2. Navigation links exist must be 
  it('Navigation links should exist', () => {
    cy.get('#nav-menu .nav-link').should('have.length.at.least', 5);
    cy.get('#nav-menu .nav-link[data-page="home"]').should('exist');
    cy.get('#nav-menu .nav-link[data-page="login"]').should('exist');
    cy.get('#nav-menu .nav-link[data-page="register"]').should('exist');
  });

  // 3. Login page form exists
  it('Login form should exist', () => {
    cy.get('.nav-link[data-page="login"]').click();
    cy.get('#login-page').should('be.visible');
    cy.get('#login-form').should('exist');
  });

  // 4. Login inputs exist
  it('Login email & password inputs should exist', () => {
    cy.get('.nav-link[data-page="login"]').click();
    cy.get('#login-email').should('exist').and('have.attr', 'type', 'email');
    cy.get('#login-password').should('exist').and('have.attr', 'type', 'password');
  });

  // 5. Login button exists
  it('Login button should exist', () => {
    cy.get('.nav-link[data-page="login"]').click();
    cy.get('#login-form button[type="submit"]').should('contain.text', 'Sign In');
  });
  // Home Page – Full UI + Form Submission Test
it('Home page loads correctly and pickup form submits successfully', () => {
  
  // Open the Home page
  cy.get('.nav-link[data-page="home"]').click();

  // The main page container should be visible
  cy.get('#home-page').should('be.visible');

  // Check title
  cy.contains('h1.page-title', 'CleanCity: Waste Pickup Scheduler').should('be.visible');

  // Card section exists
  cy.contains('h2', 'Request Waste Pickup').should('be.visible');
  cy.contains('p', 'Schedule your waste collection service').should('be.visible');

  // Success message should be hidden at first
  cy.get('#success-message').should('not.be.visible');

  // Form exists
  cy.get('#pickup-form').should('exist');

  // --- Fill the form exactly as per your HTML ---
  cy.get('#fullName')
    .should('have.attr', 'placeholder', 'Enter your full name')
    .type('Test User');

  cy.get('#location')
    .should('exist')
    .select('Nairobi');

  cy.get('input[name="wasteType"][value="General"]').check();

  cy.get('#preferredDate').type('2025-11-20');

  // Submit the form
  cy.get('#pickup-form button[type="submit"]').click();

  // Success message must now appear
  cy.get('#success-message', { timeout: 5000 }).should('be.visible');
});

  // 6. Regular user login works and logout
  it('Regular user can login and logout successfully', () => {
    cy.get('.nav-link[data-page="login"]').click();
    cy.get('#login-email').clear().type(regularUser.email);
    cy.get('#login-password').clear().type(regularUser.password);
    cy.get('#login-form button[type="submit"]').click();
    
    // Wait for logout button as login success indicator
    cy.get('#logout-btn', { timeout: 10000 }).should('be.visible');
    cy.wait(500); // small wait to stabilize
    
    cy.get('#logout-btn').click();
    cy.get('#logout-btn').should('not.be.visible');
  });

  // 7. Admin user login works and logout
  it('Admin user can login and logout successfully', () => {
    cy.get('.nav-link[data-page="login"]').click();
    cy.get('#login-email').clear().type(adminUser.email);
    cy.get('#login-password').clear().type(adminUser.password);
    cy.get('#login-form button[type="submit"]').click();
    
    // Wait for logout button as login success indicator
    cy.get('#logout-btn', { timeout: 10000 }).should('be.visible');
    cy.wait(500); // small wait to stabilize
    
    cy.get('#logout-btn').click();
    cy.get('#logout-btn').should('not.be.visible');
  });

  // 8. Register form exists
  it('Register form should exist', () => {
    cy.get('.nav-link[data-page="register"]').click();
    cy.get('#register-page').should('be.visible');
    cy.get('#register-form').should('exist');
  });

  // 9. Register inputs exist and accept values
  it('Register inputs should exist and accept input', () => {
    cy.get('.nav-link[data-page="register"]').click();
    cy.get('#register-name').should('be.visible').type('Test User');
    cy.get('#register-email').type('testuser@example.com');
    cy.get('#register-password').type('password123');
    cy.get('#register-confirm-password').type('password123');
  });

  // 10. Home page pickup form exists
  it('Home page pickup form should exist and accept input', () => {
    cy.get('.nav-link[data-page="home"]').click();
    cy.get('#home-page').should('be.visible');
    cy.get('#pickup-form').should('exist');
    cy.get('#fullName').type('Test User');
    cy.get('#location').select('Nairobi');
    cy.get('input[name="wasteType"][value="General"]').check();
    cy.get('#preferredDate').type('2025-11-20');
    cy.get('#pickup-form button[type="submit"]').click();
    cy.get('#success-message').should('be.visible');
  });

  // 11. Feedback form exists and can submit
  it('Feedback form should exist and submit successfully', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // ignore JS errors for this test only
  });
  cy.get('.nav-link[data-page="login"]').click();
  cy.get('#login-email').type('user@cleancity.com');
  cy.get('#login-password').type('password123');
  cy.get('#login-form button[type="submit"]').click();
  cy.get('.nav-link[data-page="feedback"]').click();
  cy.get('#feedback-page').should('be.visible');
  cy.get('#requestId').type('REQ001');
  cy.get('#reason').select('Missed Pickup');
  cy.get('#comments').type('Test feedback comment');
  cy.get('#feedback-form button[type="submit"]').click();
  cy.get('#feedback-success', { timeout: 5000 }).should('be.visible');

  cy.get('#logout-btn').click();
});
  // 12. Awareness page content exists
  it('Awareness page content should exist', () => {
    cy.get('.nav-link[data-page="awareness"]').click();
    cy.get('#awareness-page').should('be.visible');
    cy.get('.awareness-card').should('have.length.at.least', 3);
  });
  // 13. Dashboard table exists (Admin)
it('Dashboard table should exist', () => {
  const adminUser = { email: 'admin@cleancity.com', password: 'admin123' };
  // Go to login and log in as admin
  cy.get('.nav-link[data-page="login"]').click();
  cy.get('#login-email').type(adminUser.email);
  cy.get('#login-password').type(adminUser.password);
  cy.get('#login-form button[type="submit"]').click();

  // Wait for Dashboard link to appear
  cy.get('#user-links > a:nth-child(1)', { timeout: 10000 }).should('be.visible').click();

  // Check dashboard page and table
  cy.get('#dashboard-page', { timeout: 10000 }).should('be.visible');
  cy.get('#requests-table').should('exist');

});


  // 14. Logout button exists but hidden initially
  it('Logout button exists but hidden initially', () => {
    cy.get('#logout-btn').should('exist').and('not.be.visible');
  });

  // 15. Navigation links work correctly
  it('Navigation links navigate to correct pages', () => {
    cy.get('.nav-link[data-page="home"]').click();
    cy.get('#home-page').should('be.visible');
    cy.get('.nav-link[data-page="login"]').click();
    cy.get('#login-page').should('be.visible');
    cy.get('.nav-link[data-page="register"]').click();
    cy.get('#register-page').should('be.visible');
  });
});

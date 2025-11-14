// __tests__/pickupForm.test.js
/**
 * Jest + jsdom tests for CleanCity Pickup Form
 */

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('CleanCity Waste Pickup Form', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  // 1. Form exists
  test('form exists', () => {
    const form = document.querySelector('#pickup-form');
    expect(form).not.toBeNull();
  });

  // 2. Full Name input exists
  test('Full Name input exists', () => {
    const nameInput = document.querySelector('#fullName');
    expect(nameInput).not.toBeNull();
    expect(nameInput.type).toBe('text');
  });

  // 3. Location select exists
  test('Location select exists', () => {
    const locationSelect = document.querySelector('#location');
    expect(locationSelect).not.toBeNull();
    expect(locationSelect.tagName).toBe('SELECT');
  });

  // 4. Waste type radio buttons exist
  test('Waste type radio buttons exist', () => {
    const radios = document.querySelectorAll('input[name="wasteType"]');
    expect(radios.length).toBe(3);
    const values = Array.from(radios).map(r => r.value);
    expect(values).toEqual(expect.arrayContaining(['General', 'Recyclable', 'Hazardous']));
  });

  // 5. Preferred date input exists
  test('Preferred date input exists', () => {
    const dateInput = document.querySelector('#preferredDate');
    expect(dateInput).not.toBeNull();
    expect(dateInput.type).toBe('date');
  });

  // 6. Submit button exists
  test('Submit button exists', () => {
    const submitBtn = document.querySelector('#pickup-form button[type="submit"]');
    expect(submitBtn).not.toBeNull();
    expect(submitBtn.textContent).toMatch(/Submit Request/i);
  });

  // 7. Error message div for Full Name exists
  test('Error message container for Full Name exists', () => {
    const nameError = document.querySelector('#name-error');
    expect(nameError).not.toBeNull();
  });

  // 8. Error message div for Location exists
  test('Error message container for Location exists', () => {
    const locError = document.querySelector('#location-error');
    expect(locError).not.toBeNull();
  });

  // 9. Error message div for Waste Type exists
  test('Error message container for Waste Type exists', () => {
    const wasteError = document.querySelector('#waste-error');
    expect(wasteError).not.toBeNull();
  });

  // 10. Form has correct number of fields
  test('Form has 4 input fields (name, location, waste type, date)', () => {
    const name = document.querySelector('#fullName');
    const location = document.querySelector('#location');
    const radios = document.querySelectorAll('input[name="wasteType"]');
    const date = document.querySelector('#preferredDate');
    expect(name).not.toBeNull();
    expect(location).not.toBeNull();
    expect(radios.length).toBe(3);
    expect(date).not.toBeNull();
  });

  // 11. Form action and method
  test('Form has no action and method attributes for demo', () => {
    const form = document.querySelector('#pickup-form');
    expect(form.getAttribute('action')).toBeNull();
    expect(form.getAttribute('method')).toBeNull();
  });

  // 12. Default option in location select
  test('Location select has default empty option', () => {
    const locationSelect = document.querySelector('#location');
    expect(locationSelect.options[0].value).toBe('');
    expect(locationSelect.options[0].textContent).toMatch(/Select your city/i);
  });

  // 13. Full Name input has required attribute
  test('Full Name input is required', () => {
    const nameInput = document.querySelector('#fullName');
    expect(nameInput.required).toBe(true);
  });

  // 14. Waste Type radio buttons are required
  test('Waste Type radio buttons are required', () => {
    const radios = document.querySelectorAll('input[name="wasteType"]');
    radios.forEach(r => expect(r.required).toBe(true));
  });

  // 15. Preferred date input is optional
  test('Preferred date input is optional', () => {
    const dateInput = document.querySelector('#preferredDate');
    expect(dateInput.required).toBe(false);
  });
});

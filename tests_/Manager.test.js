const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Manager = require('/Users/mitchellroutman/repository/homework/team-profile-gen-MR/src/Manager');
const manager  = new Manager('Mitch', '214', 'manager@manager.com', '777');

test('confirm if constructor values for manager object function correctly', () => {
    expect(manager.name).toBe('Mitch');
    expect(manager.id).toBe('214');
    expect(manager.email).toBe('manager@manager.com');
    expect(manager.officenumber).toBe('777');
});
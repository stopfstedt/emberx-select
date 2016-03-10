/* jshint expr:true */
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import Ember from 'ember';

describe.only('Acceptance: Sandbox', function() {
  let application;

  beforeEach(function() {
    application = startApp();
    return visit('/sandbox');
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('can visit /sandbox', function() {
    expect(currentPath()).to.equal('sandbox');
  });

  it("issue 98 has two options", function() {
    expect($('.spec-issue-98').find('option').length).to.equal(2);
  });

  describe("toggling streak", function() {
    beforeEach(function() {
      click('.spec-toggle-streak');
    });

    it("adds 3 options to x-select", function() {
      expect($('.spec-issue-98').find('option').length).to.equal(5);
    });
  });


});

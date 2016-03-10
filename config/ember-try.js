module.exports = {
  scenarios: [
    {
      name: 'Ember 1.13.4',
      bower: {
        dependencies: {
          'ember': '1.13.4'
        }
      }
    },
    {
      name: 'Ember 2.0.0',
      bower: {
        dependencies: {
          'ember': '2.0.0'
        }
      }
    },
    {
      name: 'Ember 2.1.0',
      bower: {
        dependencies: {
          'ember': '2.1.0'
        }
      }
    },
    {
      name: 'Ember 2.2.0',
      bower: {
        dependencies: {
          'ember': '2.2.0'
        }
      }
    },
    {
      name: 'Ember 2.3.0',
      bower: {
        dependencies: {
          'ember': '2.3.0'
        }
      }
    },
    {
      name: 'Ember 2.4.0',
      bower: {
        dependencies: {
          'ember': '2.4.0'
        }
      }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    }
  ]
};

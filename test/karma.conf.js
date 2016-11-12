// Karma configuration
// Generated on Tue Nov 01 2016 22:56:24 GMT-0300 (ART)

module.exports = function(config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'models/*.js',
        'test/unit/**/*.js'

    ],


    // list of files to exclude
    exclude: [
    ],
  
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

     plugins: [
      'karma-chrome-launcher',
      'karma-junit-reporter',
      'karma-coverage',
       'karma-script-launcher',
       'karma-phantomjs-launcher',
       'karma-jasmine',
       'karma-requirejs'  

    ],
    junitReporter: {
        outputFile: 'test/test_reports/junit/junit.xml',
        suite: 'unit'
    },
    preprocessors: {
        'models/*.js': ['coverage']
    },
    coverageReporter: {
        dir: 'test/test_reports/coverage/',            
        reporters: [
            {type: 'lcov', subdir: '.'},
            {type: 'cobertura', subdir: '.', file: 'cobertura.xml'}
        ]
    }
  }

   if(process.env.TRAVIS){
    configuration.browsers = ['Chrome_travis_ci'];
  }
    config.set(configuration);  
}

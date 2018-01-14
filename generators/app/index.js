'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the stellar ' +
        chalk.red('edu-front-common-module') +
        ' generator!'
      )
    );

    var prompts = [{
        type: 'input',
        name: 'moduleName',
        message: '请输入模块名称 (module):',
        default: 'module'
      },
      {
        type: 'input',
        name: 'componentName',
        message: '请输入子模块名称 (submodule):',
        default: 'submodule'
      },
      {
        type: 'input',
        name: 'projectAuthor',
        message: '作者 (edu):',
        default: 'edu'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.projectName = 'module-' + props.moduleName
    }.bind(this));
  }

  defaults() {

    // mkdirp projectName
    if (path.basename(this.destinationPath()) !== this.props.projectName) {
      this.log(
        'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.projectName);
      this.destinationRoot(this.destinationPath(this.props.projectName));
    }

    mkdirp(path.join('test', 'meta'));
  }

  writing() {

    const data = {
      module_name: this.props.moduleName,
      component_name: this.props.componentName,
      project_author: this.props.projectAuthor
    }

    this.fs.copyTpl(
      this.templatePath('./src/demo/*'),
      this.destinationPath('./src/' + this.props.componentName), data
    );

    this.fs.copyTpl(
      this.templatePath('./src/*'),
      this.destinationPath('./src/'), data
    );

    this.fs.copyTpl(
      this.templatePath('./tutorials/demo'),
      this.destinationPath('./tutorials/' + this.props.componentName + '/'), data
    )

    this.fs.copyTpl(
      this.templatePath('./test/*'),
      this.destinationPath('./test/'), data
    )

    this.fs.copyTpl(
      this.templatePath('./test/app'),
      this.destinationPath('./test/app'), data
    )

    this.fs.copyTpl(
      this.templatePath('./test/demo/*'),
      this.destinationPath('./test/' + this.props.componentName + '/'), data
    )

    // copy config
    this.fs.copyTpl(
      this.templatePath('./*'),
      this.destinationPath('./'), data, {}, {
        globOptions: {
          dot: true
        }
      }
    )
  }

  install() {
    this.installDependencies();
  }
};

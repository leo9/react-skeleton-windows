var React = require('react');
var validator = require("email-validator");

var EmailField = React.createClass({
  getInitialState: function(){
    return {value: "", validate: true};
  },
  onChange: function(e){
    if (validator.validate(e.target.value)){
      this.setState({value: e.target.value, validate: true});
    }else{
      this.setState({value: e.target.value, validate: false});
    }
  },
  render: function(){
    var formClass = this.state.validate ? "form-group" : "form-group has-error";
    return (
      <div className={formClass}>
        <input className="form-control" onChange={this.onChange} value={this.state.value} placeholder='Your Email ...'/>
      </div>
    );
  }
});

module.exports = EmailField;

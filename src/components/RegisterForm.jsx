var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var RegisterForm = React.createClass({
  onSubmit: function(e){
    if (!this.refs.EmailRef.state.validate || this.refs.EmailRef.state.value === ""){
      alert('you should enter an email address');
    }else{
      var HttpJson = {
        email: this.refs.EmailRef.state.value,
        firstName: this.refs.NameRef.state.value
      };
      console.log(HttpJson);
    }
  },
  render: function(){
    return(
      <div className='col-sm-3'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <NameField type="First" ref="NameRef"/>
            <br />
            <NameField type="Last" ref="NameRef"/>
            <br />
            <EmailField ref='EmailRef'/>
            <button className='btn btn-primary' onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RegisterForm;

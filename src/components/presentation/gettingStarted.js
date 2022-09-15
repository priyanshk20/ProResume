import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/actionTypes';
import { bindActionCreators } from 'redux';
import * as  documentActions from '../../actions/documentActions'

class GettingStarted extends React.Component{
     constructor(props, context) {
        super(props, context);
        this.state = {
            document: this.props.document
          }
      }
 
 
       onChange = async (skinCd) => {

        if(this.state.document.id){
            await this.props.documentActions.updateSkinCd(this.state.document.id, skinCd);        
        }
        else{
            await this.props.documentActions.setSkinCd(skinCd); 
        }
        this.props.history.push('/contact');
      }

      render(){
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == this.state.document.skinCd? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>this.onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    }
}
  
const mapStateToProps=(state)=>{
    return {
        document: state.document
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        documentActions: bindActionCreators(documentActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted)


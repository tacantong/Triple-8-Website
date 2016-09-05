import React from 'react';
import {Modal} from 'react-bootstrap';
import Header from '../Header.jsx';

const DANCER_DATA = require('json!../../ajax/dancers.json');

const CLASS_YEAR = {
    FRESHMAN: 'FRESHMAN',
    SOPHOMORE: 'SOPHOMORE',
    JUNIOR: 'JUNIOR',
    SENIOR: 'SENIOR',
    POST_GRAD: 'POST_GRAD'
};

const Company = React.createClass ({
    /**
     * dancers:{
     *  img: string
     *  name: string
     *  major: string
     *  bio: string
     *  year: CLASS_YEAR
     *  classYear: number
     * }
     */
    getInitialState() {
        return {
            activeDancer: {},
            showModal: false,
            dancers: DANCER_DATA
        };
    },

    _openModal(dancer) {
        this.setState({
            showModal: true,
            activeDancer: dancer
        });
    },

    _closeModal() {
        this.setState({showModal: false});
    },

    _renderDancer(dancer) {
        return(
            <div key={dancer.fname+dancer.lname} className="Dancer-Div col-lg-2 col-sm-3 col-xs-4">
                <div className="Dancer-Wrapper" onClick={function(){this._openModal(dancer)}.bind(this)}>
                    <img src={dancer.thumbnail} className="Dancer-Img img-responsive img-rounded"/>
                    <span className="First-Name">{dancer.fname}</span>
                    <span className="Last-Name">{dancer.lname}</span>
                </div>
            </div>
        );
    },

    _renderModal() {
        var dancer = this.state.activeDancer;
        return(
           <Modal show={this.state.showModal} onHide={this._closeModal} className="Modal-Wrapper">
               <Modal.Header closeButton>
                   <Modal.Title>
                       <div className="Dancer-Modal-Header">
                           {dancer.fname + ' ' + dancer.lname}
                       </div>
                   </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <div className="row">
                        <div className="col-xs-6">
                            <img src={dancer.img} className="img-rounded img-responsive"/>
                        </div>
                       <div className="col-xs-6">
                           <b>Year: </b>
                           {dancer.classYear}
                           <br/>
                           <b>Major: </b>
                           {dancer.major}
                           <br/>
                           <b>Hometown: </b>
                           {dancer.hometown}
                           <br/><br/>
                           {dancer.bio}
                       </div>
                   </div>
               </Modal.Body>
               <Modal.Footer>
                   {dancer.fact ? (<div><b>Fun Fact: </b>{dancer.fact}</div>) : <div/>}
               </Modal.Footer>
           </Modal>
        );
    },

    render() {
        var seniors = [];
        var juniors = [];
        var sophomores = [];
        var freshmen = [];
        var postGrads = [];

        this.state.dancers.forEach(function(dancer) {
            switch(dancer.year) {
                case CLASS_YEAR.SENIOR:
                    seniors.push(this._renderDancer(dancer));
                    break;
                case CLASS_YEAR.JUNIOR:
                    juniors.push(this._renderDancer(dancer));
                    break;
                case CLASS_YEAR.SOPHOMORE:
                    sophomores.push(this._renderDancer(dancer));
                    break;
                case CLASS_YEAR.FRESHMAN:
                    freshmen.push(this._renderDancer(dancer));
                    break;
                case CLASS_YEAR.POST_GRAD:
                    postGrads.push(this._renderDancer(dancer));
                    break;
            }
        }.bind(this));

        return (
            <div>
                <Header img="./src/images/Headers/t8party.gif" label="Meet The Company"/>
                <div className="container">
                    {this._renderModal()}
                {seniors.length > 0 ?
                    (<div>
                        <div className="row">
                            <div className="Class-Header col-xs-12">
                                Seniors
                                <hr className="Class-Header-Divider"/>
                            </div>
                        </div>
                        <div className="row">
                            {seniors}
                        </div>
                    </div>) : (<div/>)}
                {juniors.length > 0 ?
                    (<div>
                        <div className="row">
                            <div className="Class-Header col-xs-12">
                                Juniors
                                <hr className="Class-Header-Divider"/>
                            </div>
                        </div>
                        <div className="row">
                            {juniors}
                        </div>
                    </div>) : (<div/>)}
                {sophomores.length > 0 ?
                    (<div>
                        <div className="row">
                            <div className="Class-Header col-xs-12">
                                Sophomores
                                <hr className="Class-Header-Divider"/>
                            </div>
                        </div>
                        <div className="row">
                            {sophomores}
                        </div>
                    </div>) : (<div/>)}
                {freshmen.length > 0 ?
                    (<div>
                        <div className="row">
                            <div className="Class-Header col-xs-12">
                                Freshmen
                                <hr className="Class-Header-Divider"/>
                            </div>
                        </div>
                        <div className="row">
                            {freshmen}
                        </div>
                    </div>) : (<div/>)}
                {postGrads.length > 0 ?
                    (<div>
                        <div className="row">
                            <div className="Class-Header col-xs-12">
                                Post Grads
                                <hr className="Class-Header-Divider"/>
                            </div>
                        </div>
                        <div className="row">
                            {postGrads}
                        </div>
                    </div>) : (<div/>)}
                </div>
            </div>
        );
    }
});

export default Company;
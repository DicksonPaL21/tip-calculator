import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppActions from './store/actions';
import shortid from 'shortid';

// Component
import InputField from './component/InputField';
import Button from './component/Button';

// Asset
import DeleteIcon from './assets/images/delete-icon-24.png';

function App({ appData, actions, ...props }) {
  const [amount, setAmount] = useState('');
  const [percent, setPercent] = useState('');
  const [newData, setNewData] = useState('');

  const calculate = () => {
    const tip = (amount * percent) / 100;
    const data = { id: shortid.generate(), amount, percent, tip };
    actions.add(data, () => {
      setNewData(data);
      setAmount('');
      setPercent('');
    });
  };

  const deleteById = (id) => {
    actions.deleteById(id);
  };

  const NewlyAdded = () => {
    setTimeout(() => setNewData(''), 3000);
    return (
      <div className="newly-added">
        Amount: ${newData?.amount}, Percentage: ${newData?.percent}%, Tip: $
        {newData?.tip}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Tip Calculator</h1>
        <InputField
          text={'Amount($)'}
          value={amount}
          onChange={setAmount}
          type="text"
          pattern={/[^0-9]/g}
        />
        <InputField
          text={'Percentage(%)'}
          value={percent}
          onChange={setPercent}
          pattern={/[^0-9]/g}
        />
        <Button
          text={'Calculate'}
          onClick={calculate}
          disabled={!amount || !percent}
        />
      </div>
      {!!newData && <NewlyAdded />}
      <div className="history">
        <h2 className="title">History</h2>
        <div className="list">
          {appData.map((dd) => (
            <div className="item" key={dd.id}>
              Amount: ${dd.amount}, Percentage: ${dd.percent}%, Tip: ${dd.tip}
              <span className="btn-delete" onClick={() => deleteById(dd.id)}>
                <img src={DeleteIcon} alt="Delete" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ appData: state.data });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

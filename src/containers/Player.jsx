import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMusicSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from '../containers/NotFound';
const Player = props => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  console.log(props)
  useEffect(() => {
    props.getMusicSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <iframe
        src={props.playing.source}
      ></iframe>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};
const mapDispatchToProps = {
  getMusicSource
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);

import React from 'react';
import PropTypes from 'prop-types';
import { ImCalendar, ImLocation, ImFlag } from 'react-icons/im';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <span data-testid="mission-name">{ name }</span>
        <div className="info">
          <ImCalendar />
          <span data-testid="mission-year">{ year }</span>
        </div>
        <div className="info">
          <ImLocation />
          <span data-testid="mission-country">{ country }</span>
        </div>
        <div className="info">
          <ImFlag />
          <span data-testid="mission-destination">{ destination }</span>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;

import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="item" data-testid="planet-card">
        <div><img src={ planetImage } alt={ `Planeta ${planetName}` } /></div>
        <div className="caption">
          <span data-testid="planet-name">{ planetName }</span>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;

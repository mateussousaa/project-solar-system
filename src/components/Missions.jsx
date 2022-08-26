import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions">
        <div className="container" data-testid="missions">
          <Title headline="Missões" />
          <div className="missions-section">
            {
              missions.map((mission) => (
                <MissionCard
                  key={ mission.name }
                  name={ mission.name }
                  year={ mission.year }
                  country={ mission.country }
                  destination={ mission.destination }
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Missions;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Statistics.scss';
import actions from '../../actions';

const Statistics = ({ statistics }) => {
    useEffect(() => {
        actions.fetchStatistics();
    }, []);

    return (
        <div className="statistics-container">
            {statistics ? (
                <>
                    <div>
                        Games won by player: {statistics.player}
                    </div>
                    <div>
                        Games won by AI: {statistics.ai}
                    </div>
                    <div>
                        Games won by X: {statistics.X}
                    </div>
                    <div>
                        Games won by O: {statistics.O}
                    </div>
                    <button onClick={actions.resetStatistics}>Reset statistics</button>
                </>
            ) : (
                <>
                    No statistics info.
                    <button onClick={actions.fetchStatistics}>Refetch</button>
                </>
            )}
        </div>
    );
};

export default connect((state) => ({
    statistics: state.statistics
}))(Statistics);

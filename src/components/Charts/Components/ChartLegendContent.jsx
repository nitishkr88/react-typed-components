// Chart Legend Content component to be used with Chart Legend component. This
// is a customized version of the legend that supports showing/hiding chart
// content with a Checkbox interface.
//
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Checkbox from '../../Checkbox/Checkbox';
import './ChartLegendContent.less';

export default class ChartLegendContent extends React.Component {
  render() {
    const { activeItems, payload, onChange } = this.props;

    const legendItems = _.map(payload, item => {
      const isActive = _.isUndefined(activeItems)
        ? true // all items are active by default
        : activeItems.includes(item.dataKey);
      return (
        <div className="legend-item" key={ item.dataKey }>
          <Checkbox
            checked={ isActive }
            color={ item.color }
            id={ item.dataKey }
            label={ item.title || item.dataKey }
            onChange={ onChange }
            value={ isActive ? 'active' : 'inactive' }
          />
        </div>
      );
    });

    return (
      <div className="rtc rtc-chart-legend-content">
        { legendItems }
      </div>
    );
  }

}

ChartLegendContent.propTypes = {
  /**
   * Array of active item data keys. This can be used to control which series
   * are shown as active.
   */
  activeItems: PropTypes.arrayOf(PropTypes.string),
  /**
   * Payload from the Chart component containing the config for each series.
   */
  payload: PropTypes.arrayOf(PropTypes.shape({
    // Used to identify the key for a particular line in this chart
    dataKey: PropTypes.string,
    // Color used to display the legend key
    color: PropTypes.string,
    // User friendly name for identifying a particular line in this chart
    title: PropTypes.string
  })),
  /**
   * Checkbox onChange event handler.
   */
  onChange: PropTypes.func
};

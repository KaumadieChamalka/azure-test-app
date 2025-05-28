import React from 'react';
import { Empty, Table } from 'antd';
//import PropTypes from 'prop-types';

const CommonTable = ({
  columns,
  dataSource,
  pagination = { pageSize: 5 },
  loading = false,
  rowKey = 'id',
  ...restProps
}) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
      loading={loading}
      rowKey={rowKey}
      locale={{ emptyText: <Empty description={'No Data'} />, }}
      {...restProps}
    />
  );
};

// CommonTable.propTypes = {
//   columns: PropTypes.arrayOf(PropTypes.object).isRequired,
//   dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
//   pagination: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.bool
//   ]),
//   loading: PropTypes.bool,
//   rowKey: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.func
//   ])
// };

export default CommonTable; 
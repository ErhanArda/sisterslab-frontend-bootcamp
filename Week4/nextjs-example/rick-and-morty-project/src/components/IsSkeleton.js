import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';

const IsSkeleton = ({ loading, variant, width, height, children }) => {
  if (loading) {
    return <Skeleton variant={variant} width={width} height={height} />;
  }
  return children;
};
IsSkeleton.propTypes = {
  loading: PropTypes.bool.isRequired,
  variant: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
};

export default IsSkeleton;

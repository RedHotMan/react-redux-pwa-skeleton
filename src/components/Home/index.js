// @flow
import { connect } from "react-redux";
import { Home } from "./presenter";
import { getOwnerName } from "../../actions";

const mapStateToProps = ({ ownerNameReducer }) => {
  return {
    ownerName: ownerNameReducer.ownerName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOwnerName: () => dispatch(getOwnerName())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

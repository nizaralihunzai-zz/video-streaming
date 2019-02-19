import PropTypes from 'prop-types';
/**
 * Generates an uppercase name of provided constant name.
 * @param {*string} str string to generate uppercase case
 */
const genName = (str) => str.split('.')[0].toUpperCase();

/**
 * Generates constants, actions and mapDispatchToProps
 * the convention is as follow:
 *  . (dot) is used to tell generator what to do with each item in an array. The first
 *  string before dot is a constant name. It will converted into something like this: APP/MODULES/EDIT_USER
 *  the second and third strings after dots are optional.
 *  - payload means that this action receives payload.
 *  - toProps means that create an mapDispatchToProps method.
 * @param {Array}} items array of string ['edit_todo.payload.toProps']
 * @param {String} domain name of the domain for constants: APP/USERS/ADD_USER
 */
const generateActions = (items, domain = 'APP') => {
  const result = {
    constants: {},
    actions: {},
    toProps: null,
    propTypes: {},
  };

  // generate constants
  items.forEach((item) => {
    const name = genName(item);
    result.constants[name] = `${domain}/${name}`;
  });

  // generate action creators
  items.forEach((item) => {
    const name = genName(item);
    const [first, last] = name.toLowerCase().split('_');
    const camelName = first + last.charAt(0).toUpperCase() + last.slice(1);
    const needPayload = item.indexOf('payload') > -1;
    result.actions[camelName] = needPayload ?
      (payload) => ({ type: result.constants[name], payload }) :
      () => ({ type: result.constants[name] });
  });

  // Filter array to items which needs a toProps methods.
  const toProps = items.filter((item) => item.indexOf('toProps') !== -1);

  // A higher order function that returns dispatchers
  result.toProps = (dispatch) => {
    const toPropsFuncs = {};
    toProps.forEach((item) => {
      const name = genName(item);
      const [first, last] = name.toLowerCase().split('_');
      const camelName = first + last.charAt(0).toUpperCase() + last.slice(1);
      const action = result.actions[camelName];
      if (item.indexOf('payload') > -1) {
        toPropsFuncs[camelName] = (payload) => dispatch(action(payload));
      } else {
        toPropsFuncs[camelName] = () => dispatch(action());
      }
    });
    return toPropsFuncs;
  };

  // generate proptypes
  toProps.forEach((item) => {
    const name = genName(item);
    const [first, last] = name.toLowerCase().split('_');
    const camelName = first + last.charAt(0).toUpperCase() + last.slice(1);
    result.propTypes[camelName] = PropTypes.func.isRequired;
  });

  return result;
};

export default generateActions;

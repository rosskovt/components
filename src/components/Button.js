// import classnames from 'classnames';
// ***importing with a better naming***
import className from 'classnames';

function Button({
    children,
    primary,
    success,
    danger,
    outline,
    warning,
    rounded,
    secondary,
    ...rest
}) {

    const classes = className(
        rest.className,
        'flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'bg-white': outline,
        'rounded-full': rounded,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,


    });
    return (
        <button {...rest} className={classes}>{children}</button>
    );
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, danger, warning }) => {
        const count =
            Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!danger)
            + Number(!!warning)

        if (count > 1) {
            return new Error('Prop error, should be just one set to true');
        }
    },
};

export default Button;
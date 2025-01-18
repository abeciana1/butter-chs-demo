export const toPascalCase = (str: string) => {
    return str?.replace(/(^\w|_\w)/g, (match) => match.replace('_', '').toUpperCase());
};

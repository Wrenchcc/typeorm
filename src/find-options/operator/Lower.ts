import {FindOperator} from "../FindOperator";

/**
 * Find Options Operator.
 * Example: { someField: Lower("title") }
 */
export function Lower<T>(value: T|FindOperator<T>) {
    return new FindOperator("lower", value);
}

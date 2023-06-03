import type {
  AsyncFunction,
  AsyncReturnType,
} from 'type-fest/source/async-return-type';

/**
 * Provides the shape of the payload returned by a react router loader.
 *
 * @example
 * ```ts
 * const loaderData = useLoaderData() as ReactRouterLoaderResponse<typeof myRouterLoader>;
 * ```
 */
export type ReactRouterLoaderResponse<
  ReactRouterLoaderOrActionFunctionType extends AsyncFunction
> = Exclude<AsyncReturnType<ReactRouterLoaderOrActionFunctionType>, Response>;

/**
 * Provides the shape of the payload returned by a react router loader/action.
 *
 * @example
 * ```ts
 * const actionData = useActionData() as ReactRouterActionResponse<typeof myRouterAction>;
 * ```
 */
export type ReactRouterActionResponse<
  ReactRouterLoaderOrActionFunctionType extends AsyncFunction
> =
  | Exclude<AsyncReturnType<ReactRouterLoaderOrActionFunctionType>, Response>
  | undefined;

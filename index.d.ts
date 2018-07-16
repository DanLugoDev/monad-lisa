// Type definitions for simple-resource-pool 1.0.1
// Project: https://www.github.com/danlugo92/simple-resource-pool
// Definitions by: Daniel Lugo danlugo92@gmail.com twitter.com/danlugo92

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace SimpleResourcePool;

/**
 * A resource pool is a set of resources that are kept ready to use, rather than
 * acquired on use and released afterwards. In this context, resources can refer
 * to system resources such as file handles, which are external to a process, or
 * internal resources such as objects. A pool client requests a resource from
 * the pool and performs desired operations on/with the returned resource. When
 * the client finishes its use of the resource, it is returned to the pool
 * rather than released or lost.
 */
export class ResourcePool<T> {
  /**
   * Available resources are stored here
   */
  private readonly availables: T[]
  /**
   * Busy resources are stored here
   */
  private readonly busies: T[]
  /**
   * Function which creates a new resource
   */
  private readonly creator: () => T
  /**
   * Array of unique identifiers to keep track of resource requests
   */
  private debts: number[]
  /**
   * Maximum number of resources that can be created
   */
  private readonly maxResources: number

  /**
   * Constructs a new empty ResourcePool
   * @param creator Function which creates a new resource
   * @param maxResources Maximum number of resources that can be created
   * @throws {Error} If creator returns the same object on diff calls
   * @throws {TypeError} If maxResources is not an integer
   * @throws {RangeError} If not [ 1 <= maxResources <= MAX_SAFE_INTEGER - 1 ]
   */
  constructor(creator: () => T, maxResources?: number): ResourcePool<T>

  /**
   * Returns a reference to a resource when it becomes available
   * @returns A resource if/when available
   */
  public getRes(): Promise<T>

  /**
   * Release a resource by a consumer of the pool
   * @param res The resource to be released
   */
  public release(res: T): void

  /**
   * Total existing resource count, includes both available and busy resources
   * @returns The total existing resource count
   */
  private resCount(): number
}

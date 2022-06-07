import { Policies, PolicyEffects, RolePolicies, UserPolicies } from "../policies";

export const Authorize = (...actions: string[]): MethodDecorator => {
  return (target, propertyKey, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      originalMethod.apply(this, args);

      let authorized = false;

      const { user } = args[0];

      const rolePolcies = RolePolicies.map((a: any) => {
        return { ...a, policy: Policies.find((b: any) => b.id === a.policyId && b.effect === PolicyEffects.ALLOW) }
      }).filter((r: any) => r.roleId === user.roleId && r.policy && actions.includes(`${r.policy.resource.name}:${r.policy.action}`));

      const userPolicies = UserPolicies.map((a: any) => {
        return { ...a, policy: Policies.find((b: any) => b.id === a.policyId && b.effect === PolicyEffects.ALLOW) }
      }).filter((r: any) => r.userId === user.id && r.policy && actions.includes(`${r.policy.resource.name}:${r.policy.action}`));

      authorized = !!rolePolcies.length
      authorized = !!userPolicies.length;

      if(authorized) {
        return console.log('User is authorized to access resource');
      }
      console.log('User is not authorized to access resource');
    };

    return descriptor;
  }
}
export const defineJsonResponse = (wrapper: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const result = originalMethod.apply(this, args);
    const res = args.find((e) => e.json);
    return res.json({ [wrapper]: result });
  };

  return descriptor;
};

export const defineTextResponse = (descriptor: PropertyDescriptor): PropertyDescriptor => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const result = originalMethod.apply(this, args);
    const res = args.find((e) => e.send);
    return res.send(result);
  };

  return descriptor;
};

export const JsonResponse = (wrapper = 'data'): MethodDecorator => {
  return (target, propertyKey, descriptor: PropertyDescriptor): PropertyDescriptor => {
    return defineJsonResponse(wrapper, descriptor);
  };
};

export const TextResponse = (): MethodDecorator => {
  return (target, propertyKey, descriptor: PropertyDescriptor): PropertyDescriptor => {
    return defineTextResponse(descriptor);
  };
};
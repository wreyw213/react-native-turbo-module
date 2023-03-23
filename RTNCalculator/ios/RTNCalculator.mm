#import "RTNCalculatorSpec.h"
#import "RTNCalculator.h"

@implementation RTNCalculator

RCT_EXPORT_MODULE()

- (void)add:(double)a b:(double)b resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithInteger:a+b];
    resolve(result);
}

//calculate interset

- (void)calculateInterest:(double)principal rate:(double)rate period:(double)period resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
double interest = (principal * rate * period) / 100;
NSNumber *result = [[NSNumber alloc] initWithDouble:interest];
resolve(result);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeCalculatorSpecJSI>(params);
}

@end
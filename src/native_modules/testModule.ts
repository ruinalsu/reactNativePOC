import { NativeModules } from 'react-native';
const { TestModule } = NativeModules;
const test = async () => {
  const value = await TestModule.getTestMessage();
  console.log(value);
};
test();
interface TestModuleInterface {
  getTestMessage(): string;
}
export default TestModule as TestModuleInterface;
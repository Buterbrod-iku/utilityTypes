// Example Utility Types

//
// Awaited
//
function fetchData(): Promise<Promise<{ data: string }>> {
    return new Promise((resolve) => {
        resolve(Promise.resolve({data: "Loaded"}));
    });
}

type TFetchData = Awaited<ReturnType<typeof fetchData>>; // {data: string}

//
// Partial
//
type TPeople = {
    head: string,
    eye: string,
    hand: string,
    leg: string,
    body: string,
}

const fullMan: TPeople = {
    head: '',
    eye: '',
    hand: '',
    leg: '',
    body: '',
}

const boomMen: Partial<TPeople> = {
    body: '',
    leg: '',
}

//
// Required
//
type TParams = {
    name: string,
    age?: number,
    smile?: boolean,
}

const isSmileOldSanta = (santa: Required<TParams>) => {
    return santa.smile && santa.age > 80
}

isSmileOldSanta({name: 'santa', age: 25, smile: true})

//
// Readonly
//
type TSettings = {
    name: string,
    isMultiply: boolean,
    isActive: boolean,
    delay: number,
}

const settings: TSettings = {
    name: 'main',
    isMultiply: true,
    isActive: true,
    delay: 1000,
}

const styleSmth = (settingsParam: Readonly<TSettings>) => {

    if (settingsParam.isMultiply) {
        settingsParam.delay = 5000 // Error
    }

    setTimeout(() => {
        console.log('styyyyle')
    }, settingsParam.delay)
}

settings.name = 'afterMain'

//
// Record
//
type Role = "admin" | "user" | "guest";

type RolePermissions = Record<Role, string[]>;

const rolePermissions: RolePermissions = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"],
};

//
// Pick
//
type UserPick = {
    id: number;
    name: string;
    email: string;
    age: number;
    money: number;
    password: string;
};

type UserPreview = Pick<UserPick, "id" | "name" | "email">;

const getUser = (): UserPreview => {
    // fetch smth

    return {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
    };
};

//
// Omit
//
type ButtonProps = {
    label: string;
    onClick: () => void;
    disabled: boolean;
    style: object;
};

type ButtonWithoutStyle = Omit<ButtonProps, "style">;

const button: ButtonWithoutStyle = {
    label: "Submit",
    onClick: () => console.log("Button clicked"),
    disabled: false,
};

//
// Exclude
//
type Primitive = string | number | boolean | null | undefined;

type NonNullPrimitive = Exclude<Primitive, null | undefined>;

const value: NonNullPrimitive = "hello";

//
// Extract
//
type Status = "success" | "error" | "loading" | "pending";

type FinalStatus = Extract<Status, "success" | "error">;

type ApiResponse<T> = {
    status: FinalStatus;
    data: T;
};

const response: ApiResponse<string> = {
    status: "success",
    data: "Data loaded successfully",
};

//
// NonNullable
//
type TUsername = string | null | undefined;

type ValidUser = NonNullable<TUsername>;

const user1: ValidUser = "Mark";

//
// Parameters
//
const scrollChat = (history: HTMLElement, isMobile: boolean, isFullscreen: boolean): void => {
    console.log('do smth');
}

type TScrollChat = Parameters<typeof scrollChat>

const manyScroll = (bChat: TScrollChat[0], isPromo: boolean) => {
    console.log('do many smth')
}

const manyScrollSecond = (...args: TScrollChat) => {
    console.log('do many smth')
}

//
// ConstructorParameters
//
class User {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
}

type TUserConstructor = ConstructorParameters<typeof User>

const createUser = (...args: TUserConstructor): User => {
    return new User(...args);
}

//
// ReturnType
//
const getScrollPosition = (history: HTMLElement): number => {
    if (!history) {
        return 0;
    }

    return history.scrollTop;
}

let lastPosition: ReturnType<typeof getScrollPosition> = 0

lastPosition = 300

//
// InstanceType
//
class Car {
    constructor(public brand: string, public speed: number) {
        this.brand = brand
        this.speed = speed
    }

    getCarSpeed(): number {
        return this.speed
    }

    static getMaxSpeed(): number {
        return 350
    }
}

type TCarInstance = InstanceType<typeof Car>

const getCar = (car: TCarInstance) => {
    car.getCarSpeed()
    car.getMaxSpeed() // Error
}

//
// NoInfer
//
const processValue = <T>(value: T): T => {
    return value;
}

const processValueNoInfer = <T>(value: T): NoInfer<T> => {
    return value;
}


const value1 = processValue("Hello"); // Type: "Hello"
const value2 = processValueNoInfer("Hello"); // Type: "string"


//
// ThisParameterType
//

function calculate(this: { multiplier: number }, value: number): number {
    return this.multiplier * value;
}

type CalculateThis = ThisParameterType<typeof calculate>;

const context: CalculateThis = {multiplier: 10};

console.log(calculate.call(context, 5));


//
// OmitThisParameter
//
function greet(this: { name: string }, greeting: string): string {
    return `${greeting}, my name is ${this.name}.`;
}

type GreetWithoutThis = OmitThisParameter<typeof greet>;

const greetWithoutThis: GreetWithoutThis = greet.bind({name: "Alice"});

console.log(greetWithoutThis("Hello"));


//
// ThisType
//
type Context = {
    name: string;
    age: number;
};

const obj: { greet(): string } & ThisType<Context> = {
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
};

const personContext: Context = {name: "Alice", age: 25};
const greetThisType = obj.greet.bind(personContext);

console.log(greetThisType());


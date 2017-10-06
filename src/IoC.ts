import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";  
import { TYPES } from "TYPES";

import { TestStore, ITestStore } from "TestStore";
import { Http } from "Http";
import { IHttp } from "IHttp";


const container = new Container();


container.bind<ITestStore>(TYPES.ITestStore).to(TestStore).inSingletonScope();
container.bind<IHttp>(TYPES.IHttp).to(Http); 

const LazyInject = getDecorators(container).lazyInject;


export { container, LazyInject };
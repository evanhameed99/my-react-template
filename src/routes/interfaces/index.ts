import React, { ReactElement } from "react";

export interface IRoute {
    path: string;
    name: string;
    component: any;
    exact?: boolean;
    props?: any;
}


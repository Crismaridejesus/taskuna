import React from "react";
import Notification from "./notification/Notification";
import Profile from "./profile/Profile";
import DropDownMenu from "./dropDownMenu/DropDownMenu";

export default function HeaderAction() {
    return (
        <div className="flex h-full w-full items-center justify-end">
            <div className="flex w-52 items-center justify-end gap-2">
                <Notification />
                <div className="flex w-34 items-center justify-center gap-2">
                    <Profile />
                    <DropDownMenu />
                </div>
            </div>
        </div>
    );
}

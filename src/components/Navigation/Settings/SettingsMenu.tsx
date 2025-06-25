import React from 'react';
import SettingsMenuHeader from './SettingsMenuHeader';
import SettingsMenuItem from './SettingsMenuItem';
import { IMenuItem } from '@/config/navigation';

const Settings = ({ settings = [] }: { settings: IMenuItem[] }) => {
    return (
        <div className="w-60 flex flex-col space-y-2.5 absolute bottom-[40px]">
            <div className="w-full bg-white border border-gray-300 shadow-md rounded-lg flex flex-col">
                <SettingsMenuHeader title="Settings" />
                <div className="flex-1 flex flex-col space-y-3.5 p-3">
                    {settings.map((item) => (
                        <SettingsMenuItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Settings;
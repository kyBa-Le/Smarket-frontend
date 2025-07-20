import { Select } from "antd";

const ThemeLanguageSelector = () => {
    return (
        <div className="flex items-center space-x-4 text-white">
            {/* Theme Select */}
            <Select
                defaultValue="light"
                className="!bg-transparent !text-white !shadow-none"
                options={[
                    { value: 'light', label: <span>Light</span> },
                    { value: 'dark', label: <span>Dark</span> }
                ]}
            />

            {/* Divider */}
            <div className="h-5 w-px bg-white opacity-30"></div>

            {/* Language Select */}
            <Select
                defaultValue="eng"
                className="!bg-transparent !text-white !shadow-none"
                options={[
                    { value: 'eng', label: <span>Eng</span> },
                    { value: 'vie', label: <span>Vie</span> }
                ]}
            />
        </div>
    );
};

export default ThemeLanguageSelector;
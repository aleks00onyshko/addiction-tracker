// components/addiction/AddictionCard.tsx
import React from 'react';
import { Cigarette, Wine, Coffee, Cookie, Cannabis, Gamepad, Phone, DollarSign } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Addiction, AddictionType } from "../../models/addiction.ts";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";


const ADDICTION_ICONS = {
    [AddictionType.NICOTINE]: Cigarette,
    [AddictionType.ALCOHOL]: Wine,
    [AddictionType.SUGAR]: Cookie,
    [AddictionType.CANNABIS]: Cannabis,
    [AddictionType.CAFFEINE]: Coffee,
    [AddictionType.GAMBLING]: DollarSign,
    [AddictionType.SOCIAL_MEDIA]: Phone,
    [AddictionType.VIDEO_GAMES]: Gamepad,
} as const;

interface AddictionCardProps {
    addiction: Addiction;
    onCheckIn: (id: string) => void;
}

const AddictionCard = ({ addiction, onCheckIn }: AddictionCardProps) => {
    const IconComponent = ADDICTION_ICONS[addiction.type];

    return (
        <Card className="hover:shadow-lg transition-shadow w-full mt-5">
            <CardContent className="p-4">
                {/* Header with icon and check-in button */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div style={{
                            backgroundColor: 'rgba(144, 238, 144, 0.5)', // прозорий салатовий
                        }} className={`p-2 rounded-lg bg-${addiction.status}-100`}>
                            <IconComponent className={`w-6 h-6 text-${addiction.status}-500`} />
                        </div>
                        <h3 className="text-lg font-semibold">{addiction.name}</h3>
                    </div>
                    <button
                        onClick={() => onCheckIn(addiction.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600"
                    >
                        Check In
                    </button>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-sm text-gray-500">Current Streak</div>
                        <div className="text-xl font-bold">{addiction.currentStreak} days</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-500">Money Saved</div>
                        <div className="text-xl font-bold">${addiction.moneySaved}</div>
                    </div>
                </div>

                {/* Last activity */}
                <div className="mt-4 text-sm text-gray-500">
                    Last check-in: {formatDistanceToNow(addiction.lastCheckIn, { addSuffix: true })}
                </div>
            </CardContent>
        </Card>
    );
};

export default AddictionCard;
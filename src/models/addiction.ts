export enum AddictionType {
    NICOTINE = 'nicotine',
    ALCOHOL = 'alcohol',
    SUGAR = 'sugar',
    CANNABIS = 'cannabis',
    CAFFEINE = 'caffeine',
    GAMBLING = 'gambling',
    SOCIAL_MEDIA = 'social_media',
    VIDEO_GAMES = 'video_games'
}

export enum AddictionStatus {
    GOOD = 'green',    // On track, maintaining streak
    WARNING = 'yellow', // Missed check-ins or reported struggles
    DANGER = 'red'     // Recent relapse or multiple missed check-ins
}

export interface Addiction {
    id: string;
    name: string;          // e.g., "Nicotine", "Alcohol"
    type: AddictionType;   // for icon selection
    startDate: Date;       // when tracking began
    currentStreak: number; // current streak in days
    lastCheckIn: Date;     // last activity timestamp
    status: AddictionStatus;  // current status
    moneySaved: number;    // calculated savings
}
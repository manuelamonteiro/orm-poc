export type signUp = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type signIn = Omit<signUp, "name">

export type humorAnalysis = {
    id: string | number,
    date: string,
    mood: string,
    activities: string
};

export type humorPost = Omit<humorAnalysis, "id">;

export type humorUpdate = Omit<humorAnalysis, "id" | "date">;

export type analysis = {
    id: string | number,
    humorWhy: string,
    howToChange: string
};

export type analysisPost = Omit<analysis, "id">;
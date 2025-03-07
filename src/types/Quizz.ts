export enum QuizSteps {
  SelectGender,
  Agreement,
  Email,
  Results,
}

export type Gender = "man" | "woman";

export type Agreement = "yes" | "no";

export interface QuizContextProps {
  step: QuizSteps;
  setStep: (step: QuizSteps) => void;
  gender: Gender | null;
  setGender: (gender: Gender) => void;
  lookingFor: Gender | null;
  setLookingFor: (lookingFor: Gender) => void;
  isAgree: Agreement | null;
  setIsAgree: (isAgree: Agreement) => void;
  email: string;
  setEmail: (email: string) => void;
  partnerGoals: string | null;
  setPartnerGoals: (partnerGoals: string) => void;
  emotionalConnection: string | null;
  setEmotionalConnection: (emotionalConnection: string) => void;
  effortCompromise: string | null;
  setEffortCompromise: (effortCompromise: string) => void;
}

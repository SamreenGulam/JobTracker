package com.jobtracker.model;

public enum JobStatus {
    APPLIED("Applied"),
    INTERVIEW("Interview"),
    OFFER("Offer"),
    REJECTED("Rejected");

    private final String displayName;

    JobStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

    @Override
    public String toString() {
        return displayName;
    }
}

package com.jobtracker.repository;

import com.jobtracker.model.Job;
import com.jobtracker.model.JobStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    
    // Find jobs by status
    List<Job> findByStatus(JobStatus status);
    
    // Find jobs by company (case insensitive)
    List<Job> findByCompanyIgnoreCase(String company);
    
    // Find jobs by position containing keyword (case insensitive)
    List<Job> findByPositionContainingIgnoreCase(String keyword);
    
    // Find jobs by company and status
    List<Job> findByCompanyIgnoreCaseAndStatus(String company, JobStatus status);
    
    // Custom query to find jobs with notes containing specific text
    @Query("SELECT j FROM Job j WHERE j.notes IS NOT NULL AND LOWER(j.notes) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Job> findJobsWithNotesContaining(@Param("keyword") String keyword);
    
    // Count jobs by status
    long countByStatus(JobStatus status);
    
    // Find jobs ordered by creation date (newest first)
    List<Job> findAllByOrderByCreatedAtDesc();
    
    // Find jobs ordered by company name
    List<Job> findAllByOrderByCompanyAsc();
}

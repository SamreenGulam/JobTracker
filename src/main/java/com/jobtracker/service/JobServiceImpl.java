package com.jobtracker.service;

import com.jobtracker.model.Job;
import com.jobtracker.model.JobStatus;
import com.jobtracker.repository.JobRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService {
    
    private static final Logger logger = LoggerFactory.getLogger(JobServiceImpl.class);
    
    private final JobRepository jobRepository;
    
    @Autowired
    public JobServiceImpl(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }
    
    @Override
    public Job createJob(Job job) {
        logger.debug("Creating new job: {}", job);
        Job savedJob = jobRepository.save(job);
        logger.info("Job created successfully with ID: {}", savedJob.getId());
        return savedJob;
    }
    
    @Override
    public List<Job> getAllJobs() {
        logger.debug("Fetching all jobs");
        List<Job> jobs = jobRepository.findAll();
        logger.info("Retrieved {} jobs", jobs.size());
        return jobs;
    }
    
    @Override
    public Optional<Job> getJobById(Long id) {
        logger.debug("Fetching job with ID: {}", id);
        Optional<Job> job = jobRepository.findById(id);
        if (job.isPresent()) {
            logger.info("Job found with ID: {}", id);
        } else {
            logger.warn("Job not found with ID: {}", id);
        }
        return job;
    }
    
    @Override
    public Job updateJob(Long id, Job jobDetails) {
        logger.debug("Updating job with ID: {}", id);
        
        return jobRepository.findById(id)
                .map(existingJob -> {
                    existingJob.setCompany(jobDetails.getCompany());
                    existingJob.setPosition(jobDetails.getPosition());
                    existingJob.setStatus(jobDetails.getStatus());
                    existingJob.setNotes(jobDetails.getNotes());
                    
                    Job updatedJob = jobRepository.save(existingJob);
                    logger.info("Job updated successfully with ID: {}", id);
                    return updatedJob;
                })
                .orElseThrow(() -> {
                    logger.error("Job not found with ID: {}", id);
                    return new RuntimeException("Job not found with id: " + id);
                });
    }
    
    @Override
    public void deleteJob(Long id) {
        logger.debug("Deleting job with ID: {}", id);
        
        if (jobRepository.existsById(id)) {
            jobRepository.deleteById(id);
            logger.info("Job deleted successfully with ID: {}", id);
        } else {
            logger.error("Job not found with ID: {}", id);
            throw new RuntimeException("Job not found with id: " + id);
        }
    }
    
    @Override
    public List<Job> getJobsByStatus(JobStatus status) {
        logger.debug("Fetching jobs with status: {}", status);
        List<Job> jobs = jobRepository.findByStatus(status);
        logger.info("Retrieved {} jobs with status: {}", jobs.size(), status);
        return jobs;
    }
    
    @Override
    public List<Job> getJobsByCompany(String company) {
        logger.debug("Fetching jobs for company: {}", company);
        List<Job> jobs = jobRepository.findByCompanyIgnoreCase(company);
        logger.info("Retrieved {} jobs for company: {}", jobs.size(), company);
        return jobs;
    }
    
    @Override
    public List<Job> searchJobsByPosition(String keyword) {
        logger.debug("Searching jobs by position keyword: {}", keyword);
        List<Job> jobs = jobRepository.findByPositionContainingIgnoreCase(keyword);
        logger.info("Retrieved {} jobs matching position keyword: {}", jobs.size(), keyword);
        return jobs;
    }
    
    @Override
    public List<Job> getJobsByCompanyAndStatus(String company, JobStatus status) {
        logger.debug("Fetching jobs for company: {} with status: {}", company, status);
        List<Job> jobs = jobRepository.findByCompanyIgnoreCaseAndStatus(company, status);
        logger.info("Retrieved {} jobs for company: {} with status: {}", jobs.size(), company, status);
        return jobs;
    }
    
    @Override
    public List<Job> searchJobsByNotes(String keyword) {
        logger.debug("Searching jobs by notes keyword: {}", keyword);
        List<Job> jobs = jobRepository.findJobsWithNotesContaining(keyword);
        logger.info("Retrieved {} jobs matching notes keyword: {}", jobs.size(), keyword);
        return jobs;
    }
    
    @Override
    public long getJobCountByStatus(JobStatus status) {
        logger.debug("Counting jobs with status: {}", status);
        long count = jobRepository.countByStatus(status);
        logger.info("Found {} jobs with status: {}", count, status);
        return count;
    }
    
    @Override
    public List<Job> getJobsOrderedByDate() {
        logger.debug("Fetching jobs ordered by creation date");
        List<Job> jobs = jobRepository.findAllByOrderByCreatedAtDesc();
        logger.info("Retrieved {} jobs ordered by date", jobs.size());
        return jobs;
    }
    
    @Override
    public List<Job> getJobsOrderedByCompany() {
        logger.debug("Fetching jobs ordered by company name");
        List<Job> jobs = jobRepository.findAllByOrderByCompanyAsc();
        logger.info("Retrieved {} jobs ordered by company", jobs.size());
        return jobs;
    }
}

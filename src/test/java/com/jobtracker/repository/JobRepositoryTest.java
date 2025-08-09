package com.jobtracker.repository;

import com.jobtracker.model.Job;
import com.jobtracker.model.JobStatus;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@ActiveProfiles("test")
class JobRepositoryTest {

    @Autowired
    private JobRepository jobRepository;

    @Test
    void testCreateAndFindJob() {
        // Given
        Job job = new Job("Google", "Software Engineer", JobStatus.APPLIED, "Applied via LinkedIn");
        
        // When
        Job savedJob = jobRepository.save(job);
        Optional<Job> foundJob = jobRepository.findById(savedJob.getId());
        
        // Then
        assertThat(foundJob).isPresent();
        assertThat(foundJob.get().getCompany()).isEqualTo("Google");
        assertThat(foundJob.get().getPosition()).isEqualTo("Software Engineer");
        assertThat(foundJob.get().getStatus()).isEqualTo(JobStatus.APPLIED);
    }

    @Test
    void testFindByStatus() {
        // Given
        Job job1 = new Job("Google", "Software Engineer", JobStatus.APPLIED, "Applied via LinkedIn");
        Job job2 = new Job("Microsoft", "Developer", JobStatus.INTERVIEW, "Phone screening scheduled");
        Job job3 = new Job("Amazon", "Backend Engineer", JobStatus.APPLIED, "Application submitted");
        
        jobRepository.save(job1);
        jobRepository.save(job2);
        jobRepository.save(job3);
        
        // When
        List<Job> appliedJobs = jobRepository.findByStatus(JobStatus.APPLIED);
        List<Job> interviewJobs = jobRepository.findByStatus(JobStatus.INTERVIEW);
        
        // Then
        assertThat(appliedJobs).hasSize(2);
        assertThat(interviewJobs).hasSize(1);
        assertThat(interviewJobs.get(0).getCompany()).isEqualTo("Microsoft");
    }

    @Test
    void testFindByCompanyIgnoreCase() {
        // Given
        Job job = new Job("Google", "Software Engineer", JobStatus.APPLIED, "Applied via LinkedIn");
        jobRepository.save(job);
        
        // When
        List<Job> jobs = jobRepository.findByCompanyIgnoreCase("google");
        
        // Then
        assertThat(jobs).hasSize(1);
        assertThat(jobs.get(0).getCompany()).isEqualTo("Google");
    }

    @Test
    void testCountByStatus() {
        // Given
        Job job1 = new Job("Google", "Software Engineer", JobStatus.APPLIED, "Applied via LinkedIn");
        Job job2 = new Job("Microsoft", "Developer", JobStatus.APPLIED, "Application submitted");
        Job job3 = new Job("Amazon", "Backend Engineer", JobStatus.INTERVIEW, "Phone screening");
        
        jobRepository.save(job1);
        jobRepository.save(job2);
        jobRepository.save(job3);
        
        // When
        long appliedCount = jobRepository.countByStatus(JobStatus.APPLIED);
        long interviewCount = jobRepository.countByStatus(JobStatus.INTERVIEW);
        
        // Then
        assertThat(appliedCount).isEqualTo(2);
        assertThat(interviewCount).isEqualTo(1);
    }
}

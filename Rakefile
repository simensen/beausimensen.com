def ok_failed(condition)
  if (condition)
    puts "OK"
  else
    puts "FAILED"
  end
end

if File.exist?('sculpin.phar')
  sculpin_cmd = "php sculpin.phar"
else
  sculpin_cmd = "sculpin"
end

desc "Preview site locally"
task :preview do
    ok_failed system "compass compile"
    sculpinPid = Process.spawn("#{sculpin_cmd} generate --watch")
    compassPid = Process.spawn("compass watch")
    trap("INT") {
        [sculpinPid, compassPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    }
    [sculpinPid, compassPid].each { |pid| Process.wait(pid) }
end

# Import the re module
import re

# Import the os module
import os

# Get the current working directory
cwd = os.getcwd()

# Create an empty list
my_list = []

# Loop through all the files in the directory
for filename in os.listdir(cwd):
    # Check if the file has a .txt extension
    if filename.endswith(".txt"):
        # Open the file in read mode
        with open(filename, "r") as f:
            # Read and print the file content
            lines=f.read().splitlines()
            for line in lines:
                my_list.append(re.split("(?=https)", line))
            f.close()
# Flatten the list
final_list=sum(my_list,[])
# Remove the empty strings
final_list= [f for f in final_list if f]
# Print the list
print(final_list)
for f in final_list:
    os.system("yt-dlp -o '{0}/%(id)s.%(ext)s' {1}".format(cwd,f))

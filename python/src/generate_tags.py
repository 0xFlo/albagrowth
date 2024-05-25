from bertopic import BERTopic
import pandas as pd
import os
import re

# Function to read MDX files and extract main content
def read_mdx_files(content_dir):
    files_content = []
    front_matter_pattern = re.compile(r'^---\s*[\s\S]*?---\s*', re.MULTILINE)
    
    for root, _, files in os.walk(content_dir):
        for file in files:
            if file.endswith('.mdx'):
                with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Remove front matter
                    content = re.sub(front_matter_pattern, '', content)
                    # Remove markdown links, images, and other non-text content
                    content = re.sub(r'!\[.*?\]\(.*?\)', '', content)  # Images
                    content = re.sub(r'\[.*?\]\(.*?\)', '', content)  # Links
                    content = re.sub(r'<.*?>', '', content)  # HTML tags
                    files_content.append(content)
    return files_content

# Function to generate tags using BertTopic
def generate_tags(docs):
    if not docs:
        raise ValueError("No documents found to generate topics.")
    
    topic_model = BERTopic()
    topics, _ = topic_model.fit_transform(docs)
    return topic_model.get_topic_info()

# Adjusted path to your content directory
content_dir = os.path.join(os.path.dirname(__file__), '../../nextjs/content/case-studies')

# Debugging output to check the correct path
print(f"Content directory path: {content_dir}")

# Read MDX files
print("Reading MDX files...")
docs = read_mdx_files(content_dir)
print(f"Number of documents read: {len(docs)}")

# Print a snippet of each document to ensure they are read correctly
for i, doc in enumerate(docs):
    print(f"Document {i+1} content (first 200 characters): {doc[:200]}")

if len(docs) == 0:
    print("No MDX files found. Please check the content directory path.")
    exit()

# Generate tags
print("Generating tags using BertTopic...")
try:
    tags = generate_tags(docs)
    print("Tags generated successfully.")
except ValueError as e:
    print(f"Error: {e}")
    exit()

# Save tags to a CSV file
output_file = 'tags.csv'
tags.to_csv(output_file, index=False)
print(f"Tags saved to {output_file}")
